
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio",
    "route": "/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 711, hash: 'aab2b51d6f3d4e373b0e04eafefcefb02516aaec0e63885f400c1972c166b757', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: 'd19ae33545113120590e1c47d9b785503b9816ec6db53617353d3048e9f48c2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6179, hash: '7fa3df274f3b8e0453e273ccc8b2800842dba941e5d30764213ef5a20d921740', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 6179, hash: '7fa3df274f3b8e0453e273ccc8b2800842dba941e5d30764213ef5a20d921740', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 6179, hash: '7fa3df274f3b8e0453e273ccc8b2800842dba941e5d30764213ef5a20d921740', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 6179, hash: '7fa3df274f3b8e0453e273ccc8b2800842dba941e5d30764213ef5a20d921740', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6179, hash: '7fa3df274f3b8e0453e273ccc8b2800842dba941e5d30764213ef5a20d921740', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-7UVFABKS.css': {size: 244, hash: 'ojaAYqUucAA', text: () => import('./assets-chunks/styles-7UVFABKS_css.mjs').then(m => m.default)}
  },
};
