interface From {
  id: number;
  is_bot: boolean;
  first_name: string;
  username: string;
}

interface Chat {
  id: number;
  first_name: string;
  username: string;
  type: string;
}

interface Entity {
  offset: number;
  length: number;
  type: string;
}

interface Result {
  message_id: number;
  from: From;
  chat: Chat;
  date: number;
  text: string;
  entities: Entity[];
}

export interface SendMessage {
  ok: boolean;
  result: Result;
}
