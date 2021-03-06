import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/postegens', this.token)
  }

  getByIdPostagens(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`http://localhost:8080/postegens/${id}`, this.token)
  }

  postPostagem(postagem: Postagem):Observable<Postagem> {
    return this.http.post<Postagem>('http://localhost:8080/postagens', postagem, this.token)
  }

  putPostagem(postagem: Postagem):Observable<Postagem> {
    return this.http.put<Postagem>('http://localhost:8080/postegens', postagem, this.token)
  }

  deletePostagem(id: number): Observable<Postagem> {
    return this.http.delete <Postagem>(`http://localhost:8080/postegens/${id}`, this.token)
  }
}
