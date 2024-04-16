import { db } from "~/server/db";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/d63e70b2-3c03-42e0-89f8-9a41c47daf5f-hwt9mm.jpg",
  "https://utfs.io/f/3dc6a465-e53c-4b19-96ad-9098fafda9fd-39brdz.jpg",
  "https://utfs.io/f/68c3175d-0004-4ff7-afa3-7e7014678c2e-rgqlw6.jpg",
  "https://utfs.io/f/0285c015-2a34-4e62-9cf6-af1f629d512c-fv3bom.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map(({ id, url }) => (
          <div key={id} className="w-48 p-4">
            <img src={url} alt="Image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
