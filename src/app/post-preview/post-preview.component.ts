import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from './../post';
import { User } from './../user';

@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Red Path ~~~                                                                                                 |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

    @Output() postSelected: EventEmitter<Post> = new EventEmitter<Post>();
    @Output() authorSelected: EventEmitter<User> = new EventEmitter<User>();

    showDetail(post: Post): void {
      this.postSelected.emit(post);
    }

    showAuthorPosts(author: User): void {
      this.authorSelected.emit(author);
    }

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Green Path ~~~                                                                                               |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : '';
  }

}
