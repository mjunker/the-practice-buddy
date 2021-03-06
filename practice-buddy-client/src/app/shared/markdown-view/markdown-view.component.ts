import {Component, Input} from "@angular/core";
import * as showdown from "showdown";


@Component({
  moduleId: module.id,
  selector: 'markdown-view',
  templateUrl: 'markdown-view.component.html',
  styleUrls: ['markdown-view.component.css']
})
export class MarkdownViewComponent {

  @Input() markdown:string;

  constructor() {
  }

  private showdownConverter = new showdown.Converter();

  getHtmlForMarkdown(markdown:string) {
    return this.showdownConverter.makeHtml(this.embedSpotifyPlayer(this.embedYoutTubePlayer(markdown)));
  }

  embedYoutTubePlayer(markdown:string):string{
    if(markdown){
      let result = markdown.replace(/https:\/\/www.youtube\.com\/watch\?v\=([^ |^\n]+)/g,
        '<iframe type="text/html" width="100%" height="450" '+
        'src="http://www.youtube.com/embed/$1" '+
        'frameborder="0"></iframe>');
        return result
    }else{
      return markdown;
    }
  }

  embedSpotifyPlayer(markdown:string):string{
    if(markdown){
      let result = markdown.replace(/https:\/\/open\.spotify\.com\/track\/([^ |^\n]+)|spotify:track:([^ |^\n]+)/g,
        '<iframe src="https://embed.spotify.com/?uri=spotify:track:$1$2" ' +
        'width="300" height="180" frameborder="0" allowtransparency="true"></iframe>');
      return result
    }else{
      return markdown;
    }
  }
}
