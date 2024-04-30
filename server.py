from flask import Flask, render_template, request, jsonify, url_for, redirect, make_response, session, abort, g
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



@app.route('/')
@app.route('/index')
def index():
    g.database = db
    return render_template('index.html')


@app.route('/news')
def news():
    return render_template('news.html')


@app.route('/declorations')
def declorations():
    return render_template('declorations.html')


@app.route('/about_us')
def about_us():
    return render_template('about_us.html')

@app.route('/')
def main():
    return render_template('admin.html')


@app.route('/superadmin')
def superadmin():
    if session['_user_id'] == '1':
        return render_template('superadmin.html')
    abort(401)

'''
@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        if session['_user_id'] == '1':
            return redirect(url_for('superadmin'), 301)
        return redirect(url_for('admin'), 301)
    if request.method == 'POST':
        admin = Admin.query.filter_by(name=request.form['login']).all()[0]
        if admin is None or admin.password != request.form['password']:
            return redirect(url_for('login'), 301)
        login_user(admin)
        print(session['_user_id'])
        if session['_user_id'] == '1':
            return redirect(url_for('superadmin'), 301)
        return redirect('/admin/', 301)
    return render_template('login.html')
    '''

'''
@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))
'''

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



if __name__ == "__main__":
    app.run()
