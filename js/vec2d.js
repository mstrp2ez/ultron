var Vec2d=function(p_fX,p_fY){
	this.m_fX=(p_fX===undefined)?0:p_fX;
	this.m_fY=(p_fY===undefined)?0:p_fY;
	var xThis=this;	
	this.Set=function(p_fX,p_fY){
		xThis.m_fX=p_fX;
		xThis.m_fY=p_fY;
	}	
	this.Zero=function(){
		xThis.m_fX=xThis.m_fY=0;	
	}	
	this.AddS=function(p_S){
		xThis.m_fX+=p_S;		
		xThis.m_fY+=p_S;		
		return xThis;	
	}	
	this.AddV=function(p_V){
		xThis.m_fX+=p_V.m_fX;		
		xThis.m_fY+=p_V.m_fY;		
		return xThis;	
	}	
	this.SubS=function(p_S){
		xThis.m_fX-=p_S;		
		xThis.m_fY-=p_S;		
		return xThis;	
	}	
	this.SubV=function(p_V){
		xThis.m_fX-=p_V.m_fX;	
		xThis.m_fY-=p_V.m_fY;		
		return xThis;	
	}	
	this.MultS=function(p_S){
		xThis.m_fX*=p_S;
		xThis.m_fY*=p_S;
		return xThis;		
	}	
	this.MultV=function(p_V){
		xThis.m_fX*=p_V.m_fX;
		xThis.m_fY*=p_V.m_fY;
		return xThis;	
	}	
	this.DivS=function(p_S){
		if(p_S==0){return;}	
		xThis.m_fX/=p_S;
		xThis.m_fY/=p_S;
		return xThis;		
	}	
	this.DivV=function(p_V){
		if(p_V.m_fX!=0){
			xThis.m_fX=p_V.m_fX;
		}		
		if(p_V.m_fY!=0){
			xThis.m_fY=p_V.m_fY;
		}		
		return xThis;	
	}	
	this.Length=function(){		
		return Math.sqrt(xThis.m_fX*xThis.m_fX+xThis.m_fY*xThis.m_fY);	
	}	
	this.LengthSquared=function(){
		return xThis.m_fX*xThis.m_fX+xThis.m_fY*xThis.m_fY;	
	}	
	this.Dot=function(p_Vec){		
		return xThis.m_fX*p_Vec.m_fX+xThis.m_fY*p_Vec.m_fY;
	}	
	this.Normalize=function(){
		var len=xThis.Length();
		if(len==0){len=1;}		
		xThis.m_fX/=len;		
		xThis.m_fY/=len;		
		return xThis;	
	}	
	this.Copy=function(){
		return new Vec2d(xThis.m_fX,xThis.m_fY);	
	}
}