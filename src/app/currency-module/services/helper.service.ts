import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public generatePages(currentPage, maxPages, nbPagesAffiche?) {
    nbPagesAffiche = nbPagesAffiche == null ? 10 : nbPagesAffiche;
    let pages = []
    if (maxPages <= nbPagesAffiche) {
      for (let index = 1; index <= maxPages; index++) {
        pages.push(index);
      }
      return pages;
    }
    if (currentPage <= Math.floor(nbPagesAffiche / 2)) {
      for (let index = 1; index <= nbPagesAffiche; index++) {
        pages.push(index);
      }
      return pages;
    }
    let dif = maxPages - currentPage;
    if (dif == 0) {
      for (let index = maxPages - nbPagesAffiche + 1; index <= maxPages; index++) {
        pages.push(index);
      }
      return pages;
    }
    if (dif > Math.floor(nbPagesAffiche / 2)) {
      for (let index = currentPage - Math.floor(nbPagesAffiche / 2); index <= currentPage + Math.floor(nbPagesAffiche / 2); index++) {
        pages.push(index);
      }
      return pages;
    }
    if (dif <= Math.floor(nbPagesAffiche / 2)) {
      for (let index = currentPage - (nbPagesAffiche - dif - 1); index < currentPage + dif + 1; index++) {
        pages.push(index);
      }
      return pages;
    }
  }

}
