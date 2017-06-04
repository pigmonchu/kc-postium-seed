import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router} from "@angular/router";

import { Post } from './../post';
import { User } from './../user';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  constructor(private _router: Router) { }

  @Input() posts: Post[];

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Red Path ~~~                                                                                                 |
   |------------------------------------------------------------------------------------------------------------------|
   | Maneja el evento del componente PostPreviewComponent que indica la selección del autor de un post y navega a la  |
   | dirección correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app. |
   | La ruta a navegar es '/posts/users', pasando como parámetro el identificador del autor.                          |
   |------------------------------------------------------------------------------------------------------------------*/
  watchUserPosts(user: User): void {
    this._router.navigate([`/posts/users/${user.id}`]);
  }
  
  /*-----------------------------------------------------------------------------------------------------------------|
   | ~~~ Green Path ~~~                                                                                              |
   |-----------------------------------------------------------------------------------------------------------------|
   | Maneja el evento del componente PostPreviewComponent que indica la selección de un post y navega a la dirección |
   | correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app.  La ruta |
   | a navegar es '/posts', pasando como parámetro el identificador del post.                                        |
   |-----------------------------------------------------------------------------------------------------------------*/

   watchDetailPost(post: Post): void {
     this._router.navigate([`/posts/${post.id}`]);
   }
}
