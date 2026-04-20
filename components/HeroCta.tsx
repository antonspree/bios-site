"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

const PROMPT_TEXT = `Step 1: Setup Browserbase

Read https://browserbase.com/SKILL.md and follow its setup instructions.
If Browserbase CLI is already installed, update it to the latest version: npm update -g @browserbasehq/cli
Note: The CLI requires Node.js. If the user does not have Node.js installed, install it first.

Step 2: Ask the user

Would you like to:
a) Start a fresh project
b) Integrate into an existing project

Step 3: Create or integrate

If the answer to Step 2 is (a) - Fresh project:

Ask the user which language they prefer (Python or TypeScript).

Run: bb templates clone getting-started-with-browserbase --language <language>

Then follow the output instructions: cd into the project, install dependencies,
cp .env.example .env, and add the user's Browserbase API key and project ID to .env.

If the answer to Step 2 is (b) - Existing project:

Read the user's codebase to understand:

- Language and framework
- Package manager (npm, pip, maven, gradle, bundler, dotnet, etc.)
- Project structure and file conventions
- Entry points and existing browser automation code (if any)
- How environment variables are managed (.env, config files, secrets, etc.)

Ask the user what they want Stagehand on Browserbase to do in their project.

Based on the project's language, read the relevant Stagehand SDK README:

TypeScript: https://raw.githubusercontent.com/browserbase/stagehand/main/README.md
Python: https://raw.githubusercontent.com/browserbase/stagehand-python/main/README.md
Java: https://raw.githubusercontent.com/browserbase/stagehand-java/main/README.md
Kotlin: https://raw.githubusercontent.com/browserbase/stagehand-kotlin/main/README.md
Go: https://raw.githubusercontent.com/browserbase/stagehand-go/main/README.md
Ruby: https://raw.githubusercontent.com/browserbase/stagehand-ruby/main/README.md
.NET: https://raw.githubusercontent.com/browserbase/stagehand-net/main/README.md

- Install the Stagehand SDK and any required dependencies.
- Write the integration code, matching the project's existing conventions.

Step 4: Verify

Run the project and confirm a Browserbase browser session starts successfully.
Run bb sessions list to verify a new session appears.
If something fails, diagnose the issue and fix it. Common issues:

- Missing or invalid BROWSERBASE_API_KEY — check with bb projects list
- Missing BROWSERBASE_PROJECT_ID — get from bb projects list or browserbase.com/settings
- CLI not installed or outdated — reinstall with npm install -g @browserbasehq/cli
- Dependencies not installed — check the SDK README for required packages`;

const DATA_POSTHOG_PRIMARY =
  '{"event":"search-api-banner_clicked","properties":{"page":"/","text":"Get API key"}}';
const DATA_POSTHOG_COPY =
  '{"event":"search-api-banner_clicked","properties":{"page":"/","text":"Copy prompt"}}';

function SvgArrowRight() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SvgCopy() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SvgCheckLarge() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 13 9 17 19 7"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroCta() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <div className="hero__cta btn-row">
      <Link
        href="/sign-up"
        className="btn btn--primary btn--animated"
        data-posthog={DATA_POSTHOG_PRIMARY}
      >
        <span className="btn__text">Investor Access</span>
        <span className="btn__icon" aria-hidden="true">
          <SvgArrowRight />
        </span>
      </Link>
      <button
        className="btn btn--quaternary btn--icon-hover"
        type="button"
        data-copy-text={PROMPT_TEXT}
        data-posthog={DATA_POSTHOG_COPY}
        onClick={handleCopy}
      >
        <span className="btn__text">Copy prompt</span>
        <span className="btn__icon btn__icon--copy-swap" data-copy-icon-swap="" aria-hidden="true">
          <span className="btn__icon-panel btn__icon-panel--idle" hidden={copied}>
            <SvgCopy />
          </span>
          <span className="btn__icon-panel btn__icon-panel--success" hidden={!copied}>
            <SvgCheckLarge />
          </span>
        </span>
      </button>
    </div>
  );
}
