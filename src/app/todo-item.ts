export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
  isEditing?: boolean;
  oldText?: string;
}
