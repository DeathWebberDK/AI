"use client";

const SocialLink = ({ children, url }: any) => {
    return (
        <a
            className="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-none ring-zinc-500 hover:bg-neutral-500/10 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

export default SocialLink;
