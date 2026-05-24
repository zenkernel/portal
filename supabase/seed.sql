insert into public.services (slug, title, tagline, description, highlights, sort_order) values
(
  'consult',
  'Consult',
  'Strategy & technical advisory',
  'We help you clarify goals, assess architecture, and build a practical roadmap before you invest in delivery.',
  array['Architecture review', 'Cloud & platform strategy', 'Team enablement', 'Vendor evaluation'],
  1
),
(
  'design',
  'Design',
  'Product & system design',
  'From user journeys to API contracts and data models — we design systems that scale with your business.',
  array['UX & product design', 'Solution architecture', 'API & data modeling', 'Security by design'],
  2
),
(
  'implement',
  'Implement',
  'Build, integrate & ship',
  'Hands-on engineering to deliver production-ready software — integrations, automation, and cloud-native platforms.',
  array['Full-stack development', 'Cloud & DevOps', 'System integration', 'Observability & SRE'],
  3
);
