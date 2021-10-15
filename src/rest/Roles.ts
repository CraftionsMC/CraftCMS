/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

export class Roles {
  private static fetchConf = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: "{}",
  };

  public static async getRole(
    username: string,
    password: string,
    name: string
  ) {
    const conf = Roles.fetchConf;
    conf.body = JSON.stringify({
      username,
      password,
      name,
    });

    const r = await fetch("/api/v1/user/users/role/get");
    const j = await r.json();

    return j.message;
  }

  public static async setRole(
    username: string,
    password: string,
    name: string,
    role: string
  ) {
    const conf = Roles.fetchConf;
    conf.body = JSON.stringify({
      username,
      password,
      name,
      role,
    });

    const r = await fetch("/api/v1/user/users/role/set");
    const j = await r.json();

    return j.message;
  }
}
