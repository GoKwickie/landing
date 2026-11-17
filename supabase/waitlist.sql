-- Waitlist table for the landing page's "Get early access" form.
-- Run once in a new Supabase project: Dashboard → SQL Editor → New query → paste → Run.

create table if not exists public.waitlist (
    id         uuid primary key default gen_random_uuid(),
    email      text not null,
    phone      text,
    created_at timestamptz not null default now()
);

-- One sign-up per email, ignoring case.
create unique index if not exists waitlist_email_unique
    on public.waitlist (lower(email));

-- The site uses the public (publishable) key, so lock the table down:
-- visitors may add themselves, but nobody can read, edit or delete rows
-- with that key. View sign-ups in the dashboard (Table Editor) instead.
alter table public.waitlist enable row level security;

drop policy if exists "Anyone can join the waitlist" on public.waitlist;
create policy "Anyone can join the waitlist"
    on public.waitlist
    for insert
    to anon, authenticated
    with check (
        length(email) between 3 and 320
        and email like '%_@_%'
        and (phone is null or length(phone) <= 32)
    );
