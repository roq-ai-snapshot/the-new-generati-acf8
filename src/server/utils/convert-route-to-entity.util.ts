const mapping: Record<string, string> = {
  blogs: 'blog',
  courses: 'course',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
