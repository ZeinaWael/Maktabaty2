// ============================================================
//  SUPABASE CONFIGURATION  — maktabaty
//  Legacy helper module kept for reference.
//  The live app now uses `app.js` + `@supabase/supabase-js`
//  for real email/password auth and authenticated writes.
// ============================================================

const SUPABASE_URL  = 'https://unjbytljocengnbedpwr.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuamJ5dGxqb2NlbmduYmVkcHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3Njg1MjEsImV4cCI6MjA5MjM0NDUyMX0.2uf83L6YyWx7MUQufTU38HmmFuFhNl0YJ6fD0C2TZ-E';

// ---- Supabase REST helpers (no extra library needed) --------

async function sbFetch(path, options = {}) {
  const url = `${SUPABASE_URL}/rest/v1/${path}`;
  const res  = await fetch(url, {
    ...options,
    headers: {
      'apikey':        SUPABASE_ANON,
      'Authorization': `Bearer ${SUPABASE_ANON}`,
      'Content-Type':  'application/json',
      'Prefer':        'return=representation',
      ...(options.headers || {}),
    },
  });
  if (!res.ok) throw new Error(await res.text());
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// ---- Books API ----------------------------------------------

export async function loadBooksFromSupabase() {
  return sbFetch('books?order=id.asc&select=*');
}

export async function insertBook(book) {
  const { pdfData, ...meta } = book;           // keep PDF separate
  const rows = await sbFetch('books', {
    method: 'POST',
    body: JSON.stringify(meta),
  });
  const newId = rows[0].id;
  if (pdfData) await uploadPdf(newId, pdfData);
  return rows[0];
}

export async function updateBook(id, book) {
  const { pdfData, ...meta } = book;
  const rows = await sbFetch(`books?id=eq.${id}`, {
    method: 'PATCH',
    body: JSON.stringify(meta),
  });
  if (pdfData) await uploadPdf(id, pdfData);
  return rows[0];
}

export async function deleteBook(id) {
  await sbFetch(`books?id=eq.${id}`, { method: 'DELETE' });
  // also remove PDF from storage if you stored it
  await sbFetch(`storage/v1/object/books/${id}.pdf`, {
    method: 'DELETE',
  }).catch(() => {});
}

// ---- Categories API -----------------------------------------

export async function loadCategoriesFromSupabase() {
  return sbFetch('categories?order=id.asc&select=*');
}

export async function insertCategory(cat) {
  const rows = await sbFetch('categories', {
    method: 'POST',
    body: JSON.stringify(cat),
  });
  return rows[0];
}

export async function deleteCategory(id) {
  await sbFetch(`categories?id=eq.${id}`, { method: 'DELETE' });
}

// ---- PDF Storage --------------------------------------------

export async function uploadPdf(bookId, base64DataUrl) {
  const base64 = base64DataUrl.split(',')[1];
  const bytes   = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  const blob    = new Blob([bytes], { type: 'application/pdf' });

  const res = await fetch(
    `${SUPABASE_URL}/storage/v1/object/books/${bookId}.pdf`,
    {
      method:  'POST',
      headers: {
        'apikey':        SUPABASE_ANON,
        'Authorization': `Bearer ${SUPABASE_ANON}`,
        'Content-Type':  'application/pdf',
        'x-upsert':      'true',
      },
      body: blob,
    }
  );
  if (!res.ok) throw new Error(await res.text());
  return `${SUPABASE_URL}/storage/v1/object/public/books/${bookId}.pdf`;
}

export async function getPdfUrl(bookId) {
  return `${SUPABASE_URL}/storage/v1/object/public/books/${bookId}.pdf`;
}
