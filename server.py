from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import cross_origin, CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = r'sqlite:///D:\files\школьный проект\data\news.sqlite'
db = SQLAlchemy(app)
cors = CORS(app)


class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    text = db.Column(db.String(2000))
    time = db.Column(db.String(20))


class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(100))
    password = db.Column(db.String(100))


@cross_origin()
@app.route('/get_posts', methods=['GET'])
def get_news():
    list_news = Posts.query.all()
    news_json = []
    for i in list_news:
        news_json.append(
            {
                'id': i.id,
                'title': i.title,
                'text': i.text,
                'time': i.time,
            }
        )
    return jsonify(news_json)


@app.route('/add_post', methods=['POST'])
@cross_origin()
def post_news():
    response = request.json
    post = Posts(title=response['title'], text=response['text'])
    db.session.add(post)
    db.session.commit()
    return make_response('', 200)


@app.route('/delete_post/<id>')
@cross_origin()
def delete_post(id):
    post = Posts.query.filter_by(id=id).all()[0]
    db.session.delete(post)
    db.session.commit()
    return make_response('', 200)


@app.route('/edit_post/<id>', methods=['POST'])
@cross_origin()
def edit_post(id):
    response = request.json
    post = Posts.query.filter_by(id=id).all()[0]
    db.session.delete(post)
    post.title = response['title']
    post.text = response['text']
    db.session.add(post)
    db.session.commit()
    return make_response('', 200)


@app.route('/auth', methods=['POST'])
@cross_origin()
def authorize():
    response = request.json
    try:
        admin = Admin.query.filter_by(login=response['login']).all()[0]
    except IndexError:
        return jsonify(False)
    if response['password'] == admin.password:
        return jsonify(True)
    else:
        return jsonify(False)


if __name__ == "__main__":
    app.run()
