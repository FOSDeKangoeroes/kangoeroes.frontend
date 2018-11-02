import { FamilyTreeDataService } from '../../shared/family-tree-data.service';
import { TreeTotemEntry } from '../../shared/tree-totem-entry';
import { TotemEntryDataService } from '../../../totem-entry/shared/totem-entry-data.service';
import { TitleService } from '../../../core/title/title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totem-family-tree',
  templateUrl: './totem-family-tree.component.html',
  styleUrls: ['./totem-family-tree.component.scss']
})
export class TotemFamilyTreeComponent implements OnInit {
treeData: TreeTotemEntry[];
  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Stamboom');
   }

  ngOnInit() {

  }

}
