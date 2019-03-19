import { JsonController, Get } from "routing-controllers";
import { allPages, PageList } from "./data";

@JsonController()
export default class PageListController {
  @Get("/pages")
  getPages(): PageList {
    return allPages;
  }
}
