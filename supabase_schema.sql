-- ============================================================
--  Maktabaty — Supabase SQL Schema
--  Run this in your Supabase project → SQL Editor
-- ============================================================

-- ---- Books table -------------------------------------------
create table if not exists books (
  id          bigserial primary key,
  title_en    text not null,
  title_ar    text,
  author_en   text not null,
  author_ar   text,
  author_desc_en text,
  author_desc_ar text,
  category    text not null default 'fiction',
  year        int,
  pages       int,
  rating      numeric(3,1) default 4.0,
  desc_en     text,
  desc_ar     text,
  color       text default '#8B1A3A',
  wallpaper   text,
  has_pdf     boolean default false,
  created_at  timestamptz default now()
);

-- ---- Categories table --------------------------------------
create table if not exists categories (
  id       bigserial primary key,
  name_en  text not null,
  name_ar  text,
  icon     text default '📚',
  color    text default '#2c7a5c',
  created_at timestamptz default now()
);

-- ---- Row Level Security ------------------------------------
-- Allow public read, require auth for write
alter table books      enable row level security;
alter table categories enable row level security;

create policy "Public read books"      on books      for select using (true);
create policy "Public read categories" on categories  for select using (true);

-- For admin writes, use service-role key (never expose in frontend)
-- OR add a simple password check using Supabase Auth:
-- create policy "Admin insert books" on books for insert
--   with check (auth.role() = 'authenticated');

-- ---- Storage bucket for PDFs -------------------------------
insert into storage.buckets (id, name, public)
values ('books', 'books', true)
on conflict do nothing;

-- Allow public PDF downloads
create policy "Public read PDFs" on storage.objects
  for select using (bucket_id = 'books');

-- Allow admin uploads (use service-role key from backend / env var)
create policy "Admin upload PDFs" on storage.objects
  for insert with check (bucket_id = 'books');
