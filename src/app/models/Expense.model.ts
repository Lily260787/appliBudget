export class Expense {
  constructor(
    public amount: number,
    public comment: string,
    public date: string,
    public label: string,
    public status: string,
    public modality: string,
    public recurrence: boolean
  ) {}
}
