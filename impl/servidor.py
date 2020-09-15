#!/usr/bin/env python3
#-*- coding:utf-8 -*-

import sys, os
import cherrypy, json
from jinja2 import *

env = Environment( loader=FileSystemLoader('.') )
meu_local = os.path.abspath( os.path.dirname(__file__) )


class App:
    def __init__(self):
        self.last_projecao_src = None

    @cherrypy.expose
    def index(self):
        t = env.get_template('a.html')
        return t.render()
    
    @cherrypy.expose
    def projetar(self, src):
        print("Projeta: src = [%s]" % src)
        self.last_projecao_src = src
        return "blz..."


    @cherrypy.expose
    def soma(self, x, y):
        return str( int(x) + int(y) )
        

    @cherrypy.expose
    def projecao(self):
        if self.last_projecao_src == None:
            t = env.get_template('projecao_null.html')
            return t.render()
        else:    
            t = env.get_template('projecao_ok.html')
            return t.render( conteudo=self.last_projecao_src )


def roda_browser():
    os.system('sleep 1.5  &&  firefox "http://localhost:8087" &')
    

if __name__ == '__main__':
    app = App()
    
    conf = {
        '/': {
            #'tools.response_headers.on': True,
            #'tools.response_headers.headers': [('Content-Type', 'text/plain')],
            
            'tools.staticdir.root': meu_local,
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './'
            }
    }
    cherrypy.server.socket_host = '0.0.0.0'
    cherrypy.config.update({'server.socket_port': 8087})

    roda_browser()
    cherrypy.quickstart( app, '/', conf )

