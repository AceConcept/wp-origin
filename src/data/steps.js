export const DEFAULT_PROJECT_ID = 'steps-waypoint'

const STEP_IMAGE_FILES = {
  1: 'Node-StepOne.png',
  2: 'Node-steptwo.png',
}

const STEP_MARK_ICONS = {
  1: '/Icons/steps-info/step-1-icon.svg',
  2: '/Icons/steps-info/step-2-icon.svg',
  3: '/Icons/steps-info/step-3-icn.svg',
  4: '/Icons/steps-info/step-4-icon.svg',
  5: '/Icons/steps-info/step-5-icon.svg',
}

function stepImagePath(n) {
  const file = STEP_IMAGE_FILES[n] ?? STEP_IMAGE_FILES[1]
  const base = `/step_imgs/${encodeURIComponent(file)}`
  const v =
    typeof __STEP_IMG_VER__ !== 'undefined' && __STEP_IMG_VER__ ? __STEP_IMG_VER__ : ''
  return v ? `${base}?v=${encodeURIComponent(v)}` : base
}

function buildFlow(mode) {
  return mode.stepCopy.map((copy, i) => {
    const id = String(i + 1)
    return {
      id,
      title: mode.stepTitles[i],
      body: copy.onScreen[0],
      onScreen: copy.onScreen,
      movingForward: copy.movingForward,
      navLabel: mode.stepTitles[i],
      navClass: `step-${id}`,
      iframePath: mode.iframePath[id],
      iframeRoute: mode.iframeRoutes?.[id] ?? null,
    }
  })
}

function buildSidebar(steps, swatches) {
  return steps.map((step, i) => {
    const n = i + 1
    const imageUrl = stepImagePath(n)
    return {
      id: step.id,
      label: step.title,
      step: step.title,
      title: step.title,
      description: step.body,
      previewDescription: '-',
      swatch: swatches[i] ?? swatches[0],
      thumbUrl: imageUrl,
      heroImageUrl: imageUrl,
    }
  })
}

const STEPS_MODE = {
  id: 'steps-waypoint',
  kind: 'Waypoint',
  title: 'Step Waypoint',
  subtitle: 'Flow',
  crumb: 'steps-waypoint',
  description:
    'Five-step slot flow. An introduction, then the story column, steps list, in-frame arrows, and Waypoint Select, all in sync with the live iframe.',
  embedOrigin: 'https://stepsv2.guildconcept.workers.dev',
  openInNewTabUrl: 'https://stepsv2.guildconcept.workers.dev/',
  urlStyle: 'path',
  stepTitles: ['Introduction', 'Story Column', 'Steps List', 'Frame Arrows', 'Waypoint Select'],
  // stepsv2 has no per-step URLs, so every step shares one frame.
  iframePath: { 1: '/', 2: '/', 3: '/', 4: '/', 5: '/' },
  swatches: ['#cab6e0', '#e8e4f0', '#cab6e0', '#e8e4f0', '#cab6e0'],
  stepCopy: [
    {
      onScreen: [
        'Step Waypoint is a guided tour of a live app. The iframe on the stage is the real slot app, and this column walks you through it one step at a time.',
        'Each step pairs what is on screen with what to try next. The next four steps cover this column, the Steps list, the arrows inside the frame, and Waypoint Select.',
      ],
      movingForward:
        'Open Story Column in the Steps list below to see how this column tracks the frame.',
    },
    {
      onScreen: [
        'The iframe in the center is the live slot app. This column tells the story of whatever step it is showing: the title, the step number, what is on screen, and where to go next.',
        'The two always match. Change the step here or inside the frame, and the column, the iframe, and the page URL move together. Use the expand button beside the stage to view the frame full screen, and press Escape to return.',
      ],
      movingForward:
        'Read this beat, then use the Steps list below to pick another waypoint.',
    },
    {
      onScreen: [
        'Every step in the flow sits in the Steps list at the bottom of this column. If you lose your place, the list is the map back.',
        'The highlighted row is the step on screen. Pick another and the iframe crossfades to it, while the breadcrumb and the URL hash update to match.',
      ],
      movingForward:
        'Once you can reach any step from the list, try the arrows inside the iframe.',
    },
    {
      onScreen: [
        'The arrows inside the iframe walk the flow one step at a time, and this column follows along without reloading the frame.',
        "Nothing is a dead end. Back from the frame's first screen wraps to its last, forward from the last returns to the first, and the browser's back and forward buttons retrace your path.",
      ],
      movingForward:
        'Walk the loop once, then switch the header to Waypoint Select to see the other projects.',
    },
    {
      onScreen: [
        'Waypoint Select at the top of this column swaps the whole project. Polar Systems, Luna Base, and Node Menu each load into the same frame with their own steps.',
        'A loading screen covers the stage during the swap, and each project opens on its first step. Switch back to Information to read along with it.',
      ],
      movingForward:
        'Pick a project in Waypoint Select, or stay here and walk the loop again.',
    },
  ],
}

const POLAR_MODE = {
  id: 'polar-systems',
  kind: 'Waypoint',
  title: 'Polar Systems',
  subtitle: 'Cyber Security',
  crumb: 'polar-systems',
  description:
    'Anomaly catalog, incident graph, and host telemetry for Case #8846 on db-core-02.internal.',
  caseStudyUrl: 'https://atencium-ui.com/#gallery/polar-systems',
  embedOrigin: 'https://polarsysv2.guildconcept.workers.dev',
  urlStyle: 'polar-hash',
  stepTitles: ['Anomaly', 'Incident', 'Monitor'],
  iframePath: { 1: '#/anomaly', 2: '#/incident', 3: '#/monitor' },
  iframeRoutes: { 1: 'anomaly', 2: 'incident', 3: 'monitor' },
  routeToStep: { anomaly: '1', incident: '2', monitor: '3' },
  swatches: ['#e8e4f0', '#cab6e0', '#dcd4ec'],
  stepCopy: [
    {
      onScreen: [
        'The iframe opens on the anomaly catalog. Leo2.0Y has already ranked the board, and Case #8846 on db-core-02.internal is sitting at the top as a critical.',
        'This is the intake view: host, title, severity, and scan time for every live correlation. The first card is the one this flow follows.',
      ],
      movingForward:
        'Click DNS Loop & Port Scan Correlation in the iframe to open the incident graph.',
    },
    {
      onScreen: [
        'The incident view maps Case #8846 as a node graph. Internal and external hosts show lateral movement and how strongly each hop is correlated.',
        'Time-based charts on the same screen mark when the scan loop escalated. The db-core-02.internal node is the path forward.',
      ],
      movingForward:
        'Click the db-core-02.internal node, then View Host Telemetry to open the monitor.',
    },
    {
      onScreen: [
        'Monitor is the containment desk. Host telemetry is on screen, and the iframe offers AI-generated actions such as isolate host or replay traffic.',
        'This is the last beat of the Polar Systems run. The catalog, the graph, and the host view are one case told in three screens.',
      ],
      movingForward:
        'Run an action in the iframe, or step back to incident if you need the graph again.',
    },
  ],
}

const LUNA_MODE = {
  id: 'luna-base',
  kind: 'Waypoint',
  title: 'Luna Base',
  subtitle: 'Code Editor',
  crumb: 'luna-base',
  description:
    'Code editor origin, installed extensions, and the Python Environments download flow.',
  embedOrigin: 'https://luna-code-editor.guildconcept.workers.dev',
  urlStyle: 'path',
  stepTitles: ['Code Editor Origin', 'Extensions Page', 'Python Environs'],
  iframePath: {
    1: '/',
    2: '/extensions',
    3: '/extensions?extDetail=python-environments',
  },
  swatches: ['#e8e4f0', '#cab6e0', '#dcd4ec'],
  stepCopy: [
    {
      onScreen: [
        'The iframe is the Luna code editor. Explorer, tabs, and the agent chat sit in one workbench, scaled to the stage.',
        'This is the origin of the install flow. The left aside is how you leave the editor without closing the file.',
      ],
      movingForward:
        'Select the third aside tab in the iframe — Extensions — to open the installed list.',
    },
    {
      onScreen: [
        'Extensions lists what is already installed. Python Environments is the update this run is meant to fetch.',
        'The panel is the catalog inside Luna, not a separate app. Picking a row opens its detail without leaving the editor chrome.',
      ],
      movingForward: 'Select Python Environments to open the detail drawer and continue.',
    },
    {
      onScreen: [
        'The Python Environments detail is open on top of the list. Copy, version, and Download live in this drawer.',
        'Download installs the update and should raise the confirmation pop-up that ends the flow.',
      ],
      movingForward:
        'Click Download in the iframe to finish, or step back to the list if you need another extension.',
    },
  ],
}

const NODE_MENU_MODE = {
  id: 'node-menu',
  kind: 'Waypoint',
  title: 'Node Menu',
  subtitle: 'App Integration Flow',
  crumb: 'node-menu',
  description:
    'Integrations hub and the Python node view for configuration and workflow setup.',
  embedOrigin: 'https://integration-node-view.vercel.app',
  urlStyle: 'path',
  stepTitles: ['Integrations', 'Python integration'],
  iframePath: {
    1: '/',
    2: '/integration/python-1',
  },
  swatches: ['#e8e4f0', '#cab6e0'],
  stepCopy: [
    {
      onScreen: [
        'The iframe opens on the integrations hub. Processing nodes sit in one catalog, scaled to the stage.',
        'This is the origin of the node run. Browse the available integrations here before opening a single node.',
      ],
      movingForward:
        'Select the Python integration in the iframe to open its node configuration view.',
    },
    {
      onScreen: [
        'The Python integration view is open. Node configuration and workflow setup live on this screen.',
        'This is the last beat of the Node Menu run. The hub and the Python node are one flow told in two screens.',
      ],
      movingForward:
        'Tune the Python node in the iframe, or step back to the hub if you need another integration.',
    },
  ],
}

export const WAYPOINT_MODES = {
  [STEPS_MODE.id]: STEPS_MODE,
  [POLAR_MODE.id]: POLAR_MODE,
  [LUNA_MODE.id]: LUNA_MODE,
  [NODE_MENU_MODE.id]: NODE_MENU_MODE,
}

export function isWaypointId(id) {
  return Boolean(WAYPOINT_MODES[id])
}

export function waypointIdFromPath(pathname) {
  const slug = String(pathname || '')
    .split('/')
    .filter(Boolean)[0]
  return isWaypointId(slug) ? slug : DEFAULT_PROJECT_ID
}

export function pathForWaypoint(projectId) {
  return `/${isWaypointId(projectId) ? projectId : DEFAULT_PROJECT_ID}`
}

const FLOW_BY_PROJECT = Object.fromEntries(
  Object.values(WAYPOINT_MODES).map((mode) => [mode.id, buildFlow(mode)]),
)

const SIDEBAR_BY_PROJECT = Object.fromEntries(
  Object.values(WAYPOINT_MODES).map((mode) => [
    mode.id,
    buildSidebar(FLOW_BY_PROJECT[mode.id], mode.swatches),
  ]),
)

export function getWaypointMode(projectId) {
  return WAYPOINT_MODES[projectId] ?? WAYPOINT_MODES[DEFAULT_PROJECT_ID]
}

export function flowStepsFor(projectId) {
  return FLOW_BY_PROJECT[projectId] ?? FLOW_BY_PROJECT[DEFAULT_PROJECT_ID]
}

export function flowSidebarItemsFor(projectId) {
  return SIDEBAR_BY_PROJECT[projectId] ?? SIDEBAR_BY_PROJECT[DEFAULT_PROJECT_ID]
}

export function getStageEmbedOrigin(projectId) {
  return getWaypointMode(projectId).embedOrigin.replace(/\/$/, '')
}

export function stageEmbedUrlForStep(projectId, stepId) {
  const mode = getWaypointMode(projectId)
  const origin = mode.embedOrigin.replace(/\/$/, '')
  const path = mode.iframePath[stepId] ?? mode.iframePath[1]
  if (mode.urlStyle === 'polar-hash') return `${origin}/${path}`
  if (mode.urlStyle === 'path') return `${origin}${path}`
  return `${origin}${path}`
}

export function polarFlowIdFromHash(hash, projectId = DEFAULT_PROJECT_ID) {
  const steps = flowStepsFor(projectId)
  const ids = steps.map((s) => s.id)
  const mode = getWaypointMode(projectId)
  const segment = String(hash || '')
    .replace(/^#/, '')
    .replace(/^\//, '')
    .trim()
  if (ids.includes(segment)) return segment
  if (mode.routeToStep?.[segment]) return mode.routeToStep[segment]
  return ids[0] ?? '1'
}

export function embedExtrasForStep(projectId, stepId) {
  const route = getWaypointMode(projectId).iframeRoutes?.[stepId]
  return route ? { route } : {}
}

export function embedStepFor(projectId, stepId) {
  const index = Math.max(0, flowStepsFor(projectId).findIndex((s) => s.id === stepId))
  return getWaypointMode(projectId).embedSteps?.[index] ?? index + 1
}

export function stepIdForEmbedStep(projectId, embedStep, currentStepId) {
  if (embedStepFor(projectId, currentStepId) === embedStep) return currentStepId
  const match = flowStepsFor(projectId).find((s) => embedStepFor(projectId, s.id) === embedStep)
  return match?.id ?? null
}

export function stepMarkIconForStep(id) {
  return STEP_MARK_ICONS[id] ?? STEP_MARK_ICONS[1]
}

/** Default (Step Waypoint) flow — used only as a fallback. */
export const FLOW_STEPS = FLOW_BY_PROJECT[DEFAULT_PROJECT_ID]
export const FLOW_SIDEBAR_ITEMS = SIDEBAR_BY_PROJECT[DEFAULT_PROJECT_ID]
export const FLOW_STEP_IDS = FLOW_STEPS.map((s) => s.id)
export const STAGE_EMBED_ORIGIN = STEPS_MODE.embedOrigin
