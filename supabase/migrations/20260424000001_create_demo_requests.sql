create table public.demo_requests (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  company     text not null,
  role        text,
  message     text
);

alter table public.demo_requests enable row level security;

-- Only service role can read; anonymous users can insert (for the form)
create policy "Anyone can submit a demo request"
  on public.demo_requests
  for insert
  to anon
  with check (true);

create policy "Service role reads all requests"
  on public.demo_requests
  for select
  to service_role
  using (true);
