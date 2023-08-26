// 도메인이 복잡하면 여러 type.d.ts 을 생성하지만, 현재는 간단하므로 해당 파일에서 관리

type Filter = 'ALL' | 'TODO' | 'DONE';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type Kanban = {
  id: number;
  title: string;
  item: KanbanItem[];
};

type KanbanItem = {
  id: number;
  text: string;
};

type KanbanDrag = {
  kanban: Kanban;
  kanbanItem: KanbanItem;
};
