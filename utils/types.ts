export type VideoItem = {
  contentDetails: {
    duration: string;
  };
  id: string;
  snippet: {
    publishedAt: string;
    thumbnails: {
      medium: { url: string; width: number; height: number };
    };
    title: string;
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
  };
};

export type VideoData = {
  items: VideoItem[];
};

export interface Comment {
  kind: string;
  etag: string;
  id: string;
  snippet: CommentSnippet;
  replies: Replies;
}

export interface Replies {
  comments: TopLevelCommentElement[];
}

export interface TopLevelCommentElement {
  kind: string;
  etag: string;
  id: string;
  snippet: TopLevelCommentSnippet;
}

export interface TopLevelCommentSnippet {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  parentId?: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelID;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: Date;
  updatedAt: Date;
}

export interface AuthorChannelID {
  value: string;
}

export interface CommentSnippet {
  videoId: string;
  topLevelComment: TopLevelCommentElement;
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
}
