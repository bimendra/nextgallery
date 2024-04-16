import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in to continue</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
          {images.map(({ id, url, name }) => (
            <div key={id} className="w-48 p-4">
              <img src={url} alt="Image" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
