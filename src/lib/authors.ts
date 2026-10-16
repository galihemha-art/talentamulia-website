import { PROFESSIONALS } from "@/lib/professionals-data";

export type AuthorId = "maulidah" | "andiani" | "eka" | "mamluatul" | "hilda";

export type Author = {
  id: AuthorId;
  name: string;
  role: string;
  bio: string;
  photo: string;
  jobTitle: string;
};

const JOB_TITLE: Record<AuthorId, string> = {
  maulidah: "Psikolog",
  mamluatul: "Psikolog",
  hilda: "Psikolog Klinis",
  eka: "Konsultan Pengembangan Kepemimpinan & Organisasi",
  andiani: "Mitra",
};

export const AUTHORS = Object.fromEntries(
  PROFESSIONALS.map((p) => [
    p.id,
    {
      id: p.id,
      name: p.name,
      role: p.role || "Mitra",
      bio: p.desc,
      photo: p.photo,
      jobTitle: JOB_TITLE[p.id],
    },
  ]),
) as Record<AuthorId, Author>;

export const AUTHOR_LIST = Object.values(AUTHORS);
