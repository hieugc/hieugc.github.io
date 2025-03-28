
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio",
    "route": "/Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 712, hash: '045fc09c1662d4066a7a0f39cc429f14a53b8c2819b2702210dbb22cb3fb738e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '7cbc58b7c70c7a950347c576288839a7a4bee9bf2b6d8ae42507357f68224d11', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6180, hash: 'cb4ef84039c0e80a6db2cb349aae481a8168cc3c00bb5da3dc6c150d11e85d96', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 6180, hash: 'cb4ef84039c0e80a6db2cb349aae481a8168cc3c00bb5da3dc6c150d11e85d96', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 6180, hash: 'cb4ef84039c0e80a6db2cb349aae481a8168cc3c00bb5da3dc6c150d11e85d96', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6180, hash: 'cb4ef84039c0e80a6db2cb349aae481a8168cc3c00bb5da3dc6c150d11e85d96', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 6180, hash: 'cb4ef84039c0e80a6db2cb349aae481a8168cc3c00bb5da3dc6c150d11e85d96', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-7UVFABKS.css': {size: 244, hash: 'ojaAYqUucAA', text: () => import('./assets-chunks/styles-7UVFABKS_css.mjs').then(m => m.default)}
  },
};
