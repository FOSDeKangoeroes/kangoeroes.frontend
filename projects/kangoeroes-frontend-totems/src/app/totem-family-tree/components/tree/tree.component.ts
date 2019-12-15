import { FamilyTreeDataService } from '../../shared/family-tree-data.service';
import { TreeTotemEntry } from '../../shared/tree-totem-entry';
import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  private diagram: go.Diagram = new go.Diagram();

  @ViewChild('diagramDiv', { static: true })
  private diagramRef: ElementRef;

  constructor(private treeDataService: FamilyTreeDataService) {

    const $ = go.GraphObject.make;
    this.diagram = new go.Diagram();
    this.diagram.initialContentAlignment = go.Spot.Center;

    this.diagram.layout = $(go.TreeLayout, {angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform });

    this.diagram.nodeTemplate =
      $(go.Node, 'Auto',
        { deletable: false, toolTip: null},
        new go.Binding('text', 'name'),
        $(go.Shape, 'Rectangle',
          {
            fill: 'lightgray',
            stroke: null, strokeWidth: 0,
            stretch: go.GraphObject.Fill,
            alignment: go.Spot.Center
          }
        ),
        $(go.TextBlock,
          {
            font: '12px Roboto, sans-serif',
            textAlign: 'center',
            margin: 10, maxSize: new go.Size(100, NaN)
          },
          new go.Binding('text', 'name'))
      );
this.diagram.allowMove = false;
    this.diagram.linkTemplate =
      $(go.Link,  // the whole link panel
        { routing: go.Link.Orthogonal, corner: 5, selectable: false },
        $(go.Shape, { strokeWidth: 3, stroke: '#424242' }));  // the gray link shape

  }

  ngOnInit() {

    this.diagram.div = this.diagramRef.nativeElement;
   this.treeDataService.tree().subscribe(res => {
     this.diagram.model = new go.TreeModel(res);
   });
  }
}
