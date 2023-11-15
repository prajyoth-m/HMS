import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "userSearch",
})
export class UserSearchPipe implements PipeTransform {
  transform(items: any[], username: string, field: string): unknown {
    if (!items || !username) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => item[field].toLowerCase().includes(username.toLowerCase()));
  }
}
