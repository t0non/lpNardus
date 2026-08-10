import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nardusrefrigeracao.com.br";

  const routes = [
    "",
    "/servicos",
    "/servicos/ar-condicionado",
    "/servicos/camaras-frias",
    "/servicos/refrigeracao-comercial",
    "/servicos/refrigeradores",
    "/sobre",
    "/projetos",
    "/regioes-atendidas",
    "/contato",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // LPs shouldn't necessarily be heavily prioritized over main pages, but we can index them.
  const lps = [
    "/lp/manutencao-ar-condicionado-belo-horizonte",
    "/lp/manutencao-camara-fria-belo-horizonte",
    "/lp/refrigeracao-comercial-belo-horizonte"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...lps];
}
