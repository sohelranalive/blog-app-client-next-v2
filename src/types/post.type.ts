export type BlogPost = {
  id: string;
  title: string;
  content: string;
  authorId: string;

  tags: string[];

  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  isFeatured: boolean;

  views: number;
  thumbnail: string | null;

  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string

  _count: {
    comments: number;
  };
};
