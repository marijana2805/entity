export class List {
  id: number;
  name: string;
  details: string;
  selected: boolean;

  constructor(id, name, details, selected) {
    this.id = id;
    this.name = name;
    this.details = details;
    this.selected = selected;
  }
}
