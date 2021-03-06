import ListItem from './ListItem';

import {
  addedLists,
  itemsWithoutList,
  dueOrPassed,
  addActiveClass,
  arrayToDom,
} from '../view_helpers/aside';

const Aside = ({ lists, todos }, activeList = 'default') => {
  const element = document.createElement('aside');

  element.innerHTML = `
    <div class="container-fluid">
      <button class="my-4" id="side-nav-toggler"><i class="fas fa-bars"></i></button>

      <ul class="list-unstyled side-nav-header-links pb-1 border-bottom mb-0" id="side-nav-header">
        <li>
          <span><i class="fas fa-home"></i> <a href="#" class="list-navigation ${addActiveClass(
    activeList,
  )}" data-list="default">Default</a></span>
          <span class="count ml-3 hide-on-toggle">${itemsWithoutList(
    todos,
  )}</span>
        </li>
        <li class="pb-0">
            <span><i class="fas fa-sun"></i> <a href="#" class="list-navigation ${
  activeList === 'due-or-passed' ? 'active' : ''
}" data-list="due-or-passed">Passed/No date</a></span>
            <span class="count ml-3 hide-on-toggle">${dueOrPassed(todos)}</span>
        </li>
      </ul>

      <ul class="list-unstyled side-nav-main-links" id="side-nav-main">
        <li>${arrayToDom(addedLists(lists), ListItem, activeList)}</li>
      </ul>

      <div class="side-nav-actions text-center">
        <a href="#" id="add-list-toggler" class="mx-1 btn btn-info btn-sm d-block w-50 mx-auto"><i class="fas fa-list-ul text-white"></i> Add list</a>
        <form action="/" id="add-list-form" class="text-left p-3 shadow-sm hide">
          <div class="form-group">
            <input type="text" class="form-control" name="name" id="name" pattern=".{3,20}" required title="Between 3-20 characters accepted" placeholder="Enter name">
          </div>
          <button type="submit" class="btn btn-info btn-sm d-block w-50 my-3 mx-auto text-white">Submit</button>
        </form>
      </div>

      <ul
        class="list-unstyled mb-0 side-nav-footer d-flex align-items-center justify-content-around text-center w-100">
        <li><a href="javascript:;"><i class="fas fa-envelope"></i></a></li>
        <li><a href="javascript:;"><i class="fas fa-calendar-alt"></i></a></li>
        <li><a href="javascript:;"><i class="fas fa-users"></i></a></li>
        <li><a href="javascript:;"><i class="fas fa-paperclip"></i></a></li>
        <li><a href="javascript:;"><i class="fas fa-check"></i></a></li>
      </ul>
    </div>
  `;

  return element.outerHTML;
};

export default Aside;
