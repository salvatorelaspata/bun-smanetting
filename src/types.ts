export interface Projects {
    id: number;
    created_at: string;
    description: string;
    detail: string;
    feature: string;
    order: string;
    files: string;
    model_urls?: string | null;
    name: string;
    process_end?: string | null;
    process_start?: string | null;
    status: string;
    telegram_user?: null;
    thumbnail?: string | null;
    user_id: string;
    uuid: string;
  }
  