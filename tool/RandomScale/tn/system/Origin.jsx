/*  CS5 のデフォルト原点変更に対応する  http://d.hatena.ne.jp/shspage/20100530/1275200561*/function Origin(){    this.ver15_or_later = (parseFloat(version.substr(0, 2)) >= 15); // CS5 or later    this.ver14 = (version.substr(0, 2) == "14"); // CS4        if(this.ver15_or_later){        this.saved_coord_system = app.coordinateSystem;        app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;        var idx  = app.activeDocument.artboards.getActiveArtboardIndex();        this.ab  = app.activeDocument.artboards[idx];                var o   = this.ab.rulerOrigin;        var r   = this.ab.artboardRect;        this.saved_origin = [o[0], o[1]];        this.ab.rulerOrigin = [0, r[1] - r[3]];            } else if(this.ver14){        var o = app.activeDocument.rulerOrigin;        this.saved_origin = [o[0], o[1]];        app.activeDocument.rulerOrigin = [0, 0];    }    this.restore = function(){        if(this.ver15_or_later){            this.ab.rulerOrigin = this.saved_origin;            app.coordinateSystem = this.saved_coord_system;                    } else if(this.ver14){            app.activeDocument.rulerOrigin = this.saved_origin;        }    };            return this;}