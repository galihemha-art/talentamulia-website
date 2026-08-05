import { PROFESSIONALS, type Professional } from "@/lib/professionals-data";

const byId = (id: string) => PROFESSIONALS.find((p) => p.id === id)!;

/** Maps a service slug to the most relevant senior professional. */
export function expertForService(slug: string): Professional {
  if (/kesehatan|medical|wellness|rumah-sakit|healthcare/.test(slug)) return byId("andiani");
  if (/coach|kepemimpinan|leadership|pemimpin|mpp|pensiun/.test(slug)) return byId("eka");
  if (/asesmen|assessment|pemeriksaan|talenta|rekrut|talent|search|hr|organisasi/.test(slug))
    return byId("mamluatul");
  return byId("maulidah");
}
