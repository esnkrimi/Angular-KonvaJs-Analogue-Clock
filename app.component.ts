import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import Konva from "konva"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        this.CLOCK()
    }
    CLOCK() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var stage = new Konva.Stage({
            container: 'container',
            width: width,
            height: height,
        });
        var layer = new Konva.Layer();
        let intv = interval(1000)
        let angle = 0;
        let x1 = 0;
        let y1 = 0;
        angle = 6;
        intv.subscribe(d => {
            layer.removeChildren()
            x1 = 280 * Math.cos(angle * 3.14 / 180);
            y1 = 280 * Math.sin(angle * 3.14 / 180);
            angle += 6;
            console.log(x1, y1)
            var arrow = new Konva.Arrow({
                x: 280,
                y: 290,
                points: [0, 0, x1, y1],
                pointerLength: 20,
                pointerWidth: 20,
                fill: 'black',
                stroke: 'black',
                strokeWidth: 4,
            });
            layer.add(arrow);
            stage.add(layer);
        })
    }
}