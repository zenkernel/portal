-- Services offered by the company (CMS-ready content)
create table public.services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  tagline text not null,
  description text not null,
  highlights text[] not null default '{}',
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Contact form submissions
create table public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  service_interest text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'archived')),
  created_at timestamptz not null default now()
);

create index contact_inquiries_status_idx on public.contact_inquiries (status);
create index contact_inquiries_created_at_idx on public.contact_inquiries (created_at desc);

alter table public.services enable row level security;
alter table public.contact_inquiries enable row level security;

-- Public can read published services
create policy "Public read published services"
  on public.services for select
  using (is_published = true);

-- Public can submit contact inquiries
create policy "Public insert contact inquiries"
  on public.contact_inquiries for insert
  with check (true);
