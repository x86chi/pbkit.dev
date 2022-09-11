// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/docs/[...slug].tsx";
import * as $1 from "./routes/gfm.css.ts";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/wrp-example-guest.tsx";
import * as $4 from "./routes/wrp-example-host.tsx";
import * as $5 from "./routes/wrp-example.tsx";
import * as $6 from "./routes/wrp-iframe-host.tsx";
import * as $$0 from "./islands/WrpExample.tsx";
import * as $$1 from "./islands/WrpExampleGuest.tsx";
import * as $$2 from "./islands/WrpExampleHost.tsx";
import * as $$3 from "./islands/WrpIframeHost.tsx";

const manifest = {
  routes: {
    "./routes/docs/[...slug].tsx": $0,
    "./routes/gfm.css.ts": $1,
    "./routes/index.tsx": $2,
    "./routes/wrp-example-guest.tsx": $3,
    "./routes/wrp-example-host.tsx": $4,
    "./routes/wrp-example.tsx": $5,
    "./routes/wrp-iframe-host.tsx": $6,
  },
  islands: {
    "./islands/WrpExample.tsx": $$0,
    "./islands/WrpExampleGuest.tsx": $$1,
    "./islands/WrpExampleHost.tsx": $$2,
    "./islands/WrpIframeHost.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
