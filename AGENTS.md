<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep each reference screen as its own TanStack file route and share the HACKTOON presentation in src/components/hacktoon.tsx, so deep links and back navigation remain available.
- Keep unfinished registration input in the root-mounted SignupProvider during navigation; this frontend prototype does not create accounts, send codes or issue invitations.
- Use the original mascot cropped from the provided reference through a Lovable Assets pointer; do not embed reference screenshots as pages.
