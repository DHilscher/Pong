import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
    }
    render(svg) {
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'fill', 'white');
        circle.setAttributeNS(null, 'r', 8);
        circle.setAttributeNS(null, 'x', this.boardWidth / 2);
        circle.setAttributeNS(null, 'y', this.boardHeight / 2);
        svg.appendChild(circle);
    }
}