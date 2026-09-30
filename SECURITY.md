# Security Policy

## Supported version

This repository is an active website revamp prototype. Security fixes are applied to the latest commit on `main`.

## Reporting a vulnerability

Please do **not** publish credentials, tokens, private infrastructure details, or exploit steps in a public issue.

If you discover a vulnerability, report it privately to the repository owner through GitHub's security reporting features when available. Include:

- affected route or component;
- reproducible steps;
- expected and observed behavior;
- impact assessment;
- a suggested remediation, if known.

## Secret handling

Runtime secrets must be stored in the deployment platform's environment-variable store and must never be committed to this repository. Variables prefixed with `NEXT_PUBLIC_` are considered public and must never contain secrets.
