FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y build-essential

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD app $APP_HOME

RUN bundle install --without development test


EXPOSE 8080

ENTRYPOINT ["ruby", "src/app.rb"]