This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Production

- https://buildpacks.io/
- https://paketo.io/docs/

### buildpack

1. Build
   ```bash
   pack build sugardonblog --builder=paketobuildpacks/builder:0.3.287-base
   ```
1. Run
   ```bash
   docker run --interactive --tty --publish 8080:8080 sugardonblog
   ```
1. Open http://localhost:8080

### skaffold

1. Setup Kubernetes
   ```bash
   minikube start --kubernetes-version=v1.26.5
   ```
1. Run in Kuberntes
   ```bash
   skaffold dev --port-forward --tail=true
   # Build and deploy once
   # $ skaffold run
   # You can delete
   # $ skaffold delete
   ```
1. Open http://localhost:8080
1. E2E test
   ```bash
   export PLAYWRIGHT_BASE_URL="http://localhost:8080"
   yarn test:e2e
   ```

## Security

### SBOM

In the build process, buildpack automatically generates SBOM.
You can inspect vulnerability with grype.

In GitHub Codespaces(devcontainer), Syft and Grype cli are automatically installed.

1. Build image with pack or skaffold.
   ```bash
   docker images
   # REPOSITORY                    TAG            IMAGE ID       CREATED        SIZE
   # sugardonblog                  latest         1c8fbfc46d23   43 years ago   674MB
   ```
1. Download SBOM to local.
   <https://paketo.io/docs/howto/sbom/#access-syft-cyclonedx-and-spdx-sboms>
   ```bash
   pack sbom download sugardonblog:latest --output-dir /tmp/sugardonblog-sbom
   ```
   Also, you can find SBOM files.
   ```bash
   find /tmp/sugardonblog-sbom/layers/sbom -name "*.json"
   ```
1. Merge SBOM files.
   <https://paketo.io/docs/howto/sbom/#use-external-tooling-to-merge-and-visualize-the-sboms>
   ```bash
   syft /tmp/sugardonblog-sbom -o spdx-json > sugardonblog-spdx.json
   ```
1. Inspect vulnerability.
   ```bash
   grype sbom:sugardonblog-spdx.json
   ```
