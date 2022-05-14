const req = require.context("./assets/svg", false, /\.svg$/);
const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext);
requireAll(req);
