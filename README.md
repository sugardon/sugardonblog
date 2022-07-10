This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Production

- https://buildpacks.io/
- https://paketo.io/docs/

### buildpack

1. Build
   ```bash
   pack build sugardonblog --builder=paketobuildpacks/builder:0.3.19-base
   ```
1. Run
   ```bash
   docker run --interactive --tty --publish 8080:8080 sugardonblog
   ```
1. Open http://localhost:8080

### skaffold

1. Run in Kuberntes
   ```bash
   skaffold dev --port-forward --tail=true
   # Build and deploy once
   # $ skaffold run
   # You can delete
   # $ skaffold delete
   ```
1. Open http://localhost:8080
