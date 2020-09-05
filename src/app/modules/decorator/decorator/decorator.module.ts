import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DecoratorRoutingModule} from "../decorator-routing/decorator-routing.module";
import {DecoratorComponent} from "../../../components/decorators/decorator/decorator.component";
import {DecoratorDetailComponent} from "../../../components/decorators/decorator-detail/decorator-detail.component";
import {ChildOneComponent} from "../../../components/decorators/child-one/child-one.component";
import {ChildTwoComponent} from "../../../components/decorators/child-two/child-two.component";
import {ViewChildComponent} from "../../../components/decorators/view-child/view-child.component";
import {NumberComponent} from "../../../components/decorators/number/number.component";
import {NumberComponentComponent} from "../../../components/decorators/number-component/number-component.component";
import {CpcolorDirective} from "../../../components/decorators/decorator/cpcolor.directive";
import {CpColorParentComponent} from "../../../components/decorators/decorator/cp-color-parent/cp-color-parent.component";
import {CpthemeComponent} from "../../../components/decorators/decorator/cptheme/cptheme.component";
import {BookDirective} from "../../../components/decorators/decorator/book.directive";
import {WriteComponent} from "../../../components/decorators/write/write.component";
import {PersonComponent} from "../../../components/decorators/person/person.component";
import {FavouriteBooksComponent} from "../../../components/decorators/favourite-books/favourite-books.component";
import {CityComponent} from "../../../components/decorators/city/city.component";
import {AddressComponent} from "../../../components/decorators/address/address.component";
import {FriendComponent} from "../../../components/decorators/friend/friend.component";
import {FavouriteFriendsComponent} from "../../../components/decorators/favourite-friends/favourite-friends.component";
import {VcDemoComponent} from "../../../components/decorators/vc-demo/vc-demo.component";
import {WriterComponent} from "../../../components/decorators/writer/writer.component";
import {MessageComponent} from "../../../components/decorators/message/message.component";
import {MessageDirective} from "../../../components/decorators/message.directive";



@NgModule({
  declarations: [
    DecoratorComponent,
    DecoratorDetailComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ViewChildComponent,
    NumberComponent,
    NumberComponentComponent,
    CpcolorDirective,
    CpColorParentComponent,
    CpthemeComponent,
    BookDirective,
    WriteComponent,
    PersonComponent,
    FavouriteBooksComponent,
    CityComponent,
    AddressComponent,
    FriendComponent,
    FavouriteFriendsComponent,
    VcDemoComponent,
    WriterComponent,
    MessageComponent,
    MessageDirective,
  ],
  exports: [
    FriendComponent,
    FavouriteFriendsComponent,
  ],
  imports: [
    CommonModule,
    DecoratorRoutingModule
  ]
})
export class DecoratorModule { }
