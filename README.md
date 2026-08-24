# HFix Lab

Site e PWA inicial da HFix Lab, preparado em Next.js, TypeScript e Tailwind CSS para publicacao na Vercel.

## Rotas

- `/` site institucional
- `/servicos`
- `/como-funciona`
- `/solicitar-reparo`
- `/acompanhar`
- `/garantia`
- `/faq`
- `/contato`
- `/app/dashboard` PWA do cliente
- `/admin/dashboard` painel interno inicial

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validacao

```bash
npm run lint
npm run build
```

## Deploy na Vercel

1. Publique este repositorio no GitHub.
2. Na Vercel, escolha **Add New Project**.
3. Importe o repositorio `hfix-lab`.
4. Mantenha o preset **Next.js**.
5. Clique em **Deploy**.

## Proximos modulos

- Conectar formularios ao Supabase.
- Implementar autenticacao do cliente e do painel interno.
- Persistir ordens de servico, equipamentos, diagnosticos, orcamentos e garantias.
- Adicionar notificacoes por e-mail, WhatsApp e push.
