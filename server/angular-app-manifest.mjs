
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/resume"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 702, hash: '1f7b8a928de5113fee531fbaa6976493cb0096bc3f26190e71e56a2182aaaad0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: 'ff8ee6096e68fa53e4ce9b60c521f5c5fb46f5fef1b09d05ff8ad5b5f5dad186', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 6170, hash: '57b98f6d547d283fdcb9ff06f8d3aca010ad49c514ed24dfb78ffb7973dd3936', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6170, hash: '57b98f6d547d283fdcb9ff06f8d3aca010ad49c514ed24dfb78ffb7973dd3936', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 6170, hash: '57b98f6d547d283fdcb9ff06f8d3aca010ad49c514ed24dfb78ffb7973dd3936', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 6170, hash: '57b98f6d547d283fdcb9ff06f8d3aca010ad49c514ed24dfb78ffb7973dd3936', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6170, hash: '57b98f6d547d283fdcb9ff06f8d3aca010ad49c514ed24dfb78ffb7973dd3936', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7UVFABKS.css': {size: 244, hash: 'ojaAYqUucAA', text: () => import('./assets-chunks/styles-7UVFABKS_css.mjs').then(m => m.default)}
  },
};
